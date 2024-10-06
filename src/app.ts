import { SECRET_JWT } from "@config/env-variables";
import { authRouter } from "@routes/auth";
import { postRouter } from "@routes/posts";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import fileUpload from "express-fileupload";
import session from "express-session";
import passport from "passport";
import TwitterStrategy from "passport-twitter";

export const app = express();

// cabecera de express
app.disable("x-powered-by");

// parsear respuestas json
app.use(express.json());

// aceptar formularios
app.use(express.urlencoded({ extended: true }));

// parsear cookies
app.use(cookieParser());

// Configurar express-session
app.use(
  session({
    secret: SECRET_JWT!,
    resave: false,
    saveUninitialized: true,
  })
);

// Inicializar Passport.js
app.use(passport.initialize());
app.use(passport.session());

// Configurar la estrategia de Twitter

passport.use(
  new TwitterStrategy.Strategy(
    {
      consumerKey: "TU_API_KEY_TWITTER",
      consumerSecret: "TU_API_SECRET_KEY_TWITTER",
      callbackURL: "http://localhost:3000/auth/twitter/callback",
    },
    (token, tokenSecret, profile, done) => {
      // Aquí manejarás el perfil de usuario autenticado

      console.log({
        token,
        tokenSecret,
        profile,
      });
      return done(null, profile);
    }
  )
);
// Serialización/deserialización del usuario (almacenar en la sesión)
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
// subir imágenes
app.use(fileUpload());

// CORS
app.use(
  cors({
    credentials: true,
  })
);
// rutas
app.use(postRouter);
app.use(authRouter);
