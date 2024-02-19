"use client";

import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/lib/supabase/supabase-client";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Auth
        supabaseClient={supabase}
        appearance={{
          theme: ThemeSupa,
          style: {
            button: {
              width: "500px",
            },
          },
        }}
        localization={{
          variables: {
            sign_in: {
              email_label: "Email",
              password_label: "Mot de passe",
              email_input_placeholder: "test@test.fr",
              button_label: "Connexion",
            },
          },
        }}
        providers={["google", "github"]}
        redirectTo="http://localhost:3001/dashboard"
      />
    </main>
  );
}
