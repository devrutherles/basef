import React, { useRef, useState } from "react";
import {useServer} from "../../../server/server"
import ReCAPTCHA from "react-google-recaptcha";
import TextInput from "../../../components/TextInput";
import axios from "axios";
import cn from "classnames";
import styles from "./Entry.module.sass";
import GoogleAuth from "../googleAuth copy";
import ErrorIcon from '@mui/icons-material/Error';

import { Id, account } from "../../../service/serve";
import { useRouter } from "next/router";
import { phoneMask } from "@/utils";

const Entry = ({ onConfirm, signInWithGoogle }) => {
  const {createAccount} = useServer();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const history = useRouter();
  const [load, setLoad] = useState(false);
  const captchaRef = useRef(null);
  const [cadastroError, setCadastroError] = useState("");
  const [captcha, setCaptcha] = useState(true);
  const [error, setError] = useState({
    email: null,
    password: null,
  });

  const isValidEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const isValidName = (name) => {
    return name.length >= 2;
  };

  async function handller() {
    setError({ name: null, email: null, password: null, phone: null }); // reset error state at the start

    if (!name || !isValidName(name)) {
      setError((prevError) => ({ ...prevError, name: name ? "Insira um nome valido" : "O nome é obrigatório" }));
      return;
    }

    if (!email || !isValidEmail(email)) {
      setError((prevError) => ({ ...prevError, email: email ? "Email inválido" : " O email é obrigatório" }));
      return;
    }
    
    if (!password) {
      setError((prevError) => ({ ...prevError, password: "A senha é obrigatória" }));
      return;
    }

    if (password.length < 6) {
      setError((prevError) => ({ ...prevError, password: "A senha deve ter 6 ou mais caracteres" }));
      return;
    }

    if (!phone) {
      setError((prevError) => ({ ...prevError, phone: "O número de telefone não pode estar vazio" }));
      return;
    }
  
    createAccount(email, password, name, (error, response) => {
      if (error) {
        if(error.message.includes('A user with the same email already exists in your project')) {
          setError((prevError) => ({ ...prevError, email: "Conta já cadastrada" }));
        } else {
          console.error(error);
        }
      } else {
        alert("Parabéns, conta criada com sucesso");
      }
    });
}


  const sendVerificationEmail = async (nome, email, codigo) => {
    const API_EMAIL_URL = `https://freteme.com/email?email=${email}&nome=${nome}&codigo=${codigo}`;
    const options = {
      method: "GET",
      url: API_EMAIL_URL,
    };

    try {
      const response = await axios.request(options);
      if (response.status === 200 || response.data.status === 200) {
        localStorage.setItem("codigo", codigo);
        onConfirm();
      }
    } catch (error) {
      console.error(error);
      setCadastroError("Não foi possível enviar o email de verificação");
      return false;
    }
  };

  const handleSignup = async () => {
    try {
      const user = await account.create(
        Id.unique(),
        email,
        password,
        name,
        `+55${phone}`
      );
      const session = await account.createEmailSession(email, password);

      localStorage.setItem("user_id", user?.$id);
      localStorage.setItem("userName", user?.name);
      localStorage.setItem("email", user?.email);
      localStorage.setItem("session", session);
      localStorage.setItem("user", JSON.stringify(user));
      setLoad(false);

      await sendVerificationEmail(
        user?.name,
        user?.email,
        Id.unique().substring(0, 4)
      );
    } catch (e) {
      setCadastroError(`${e.message}`);
      setLoad(false);
    }
  };

  return (
    <div className={styles.entry}>
      <div className={styles.head}>
        <div className={cn("h4", styles.title)}>Seja bem vindo!</div>

      </div>
      <div className={styles.body}>
        <TextInput
          label={"name"}
          className={styles.field}
          name="name"
          type="text"
          placeholder="Seu name"
          required
          icon="profile-circle"
          value={name}
          setValue={(text)=>setName(text)}
        />
        <TextInput
          label={"Email"}
          className={styles.field}
          name="email"
          type="email"
          placeholder="Seu email"
          required
          icon="mail"
          value={email}
          setValue={(text)=>setEmail(text)}
        />
        <TextInput
          label={"phone"}
          className={styles.field}
          name="phone"
          placeholder="Seu phone"
          required
          icon="phone"
          value={phoneMask(phone)}
          setValue={(text)=>setPhone(text)}
        />
        <TextInput
          label={"password"}
          className={styles.field}
          name="password"
          type="password"
          placeholder="Sua password"
          required
          icon="lock"
          value={password}
          setValue={(text)=>setPassword(text)}
        />

        <ReCAPTCHA
          className={styles.cap}
          sitekey="6LcmmN8kAAAAACxcQMZFI2wclrEqdGIcakn3RfCS"
          onChange={setCaptcha}
          ref={captchaRef}
        />

        {captcha ? (
          <button
            disabled={load}
            className={cn("button", styles.button)}
            onClick={()=>handller()}>
            Continue
          </button>
          
        ) : (
          <button
            disabled={load}
            className={cn("button", styles.button)}
            onClick={() => handleSignup()}
          >
            Continue
          </button>
        )}
 <div className={styles.error}>
  {error.name && <p> <ErrorIcon/> {error.name}</p>}
  {error.email && <p> <ErrorIcon/> {error.email}</p>}
  {error.password && <p><ErrorIcon/> {error.password}</p>}
  {error.phone && <p><ErrorIcon/> {error.phone}</p>}
</div>
        <div className={styles.error}>{cadastroError}</div>
        <div className={styles.subtitle2}>
           <div className={styles.separator}></div>
          <h1>Ou</h1>
          <div className={styles.separator2}></div>
          </div>

        <GoogleAuth />
      </div>
    </div>
  );
};

export default Entry;
