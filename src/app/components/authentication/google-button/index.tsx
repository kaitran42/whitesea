import React from "react";
// import { createClient } from "@/utils/supabase/server";

<script src="https://accounts.google.com/gsi/client" async></script>;

// async function handleSignInWithGoogle(response) {
//   const supabase = createClient();
//   const { data, error } = await supabase.auth.signInWithIdToken({
//     provider: "google",
//     token: response.credential,
//   });
// }

export default function GoogleButton() {
  return (
    <div>
      <div
        id="g_id_onload"
        data-client_id="230968802416-cskvr2n0c0vjsvt0fbcrrcik5sunuomk.apps.googleusercontent.com"
        data-context="use"
        data-ux_mode="popup"
        data-login_uri="http://localhost"
        data-auto_prompt="false"
      ></div>

      <div
        className="g_id_signin"
        data-type="standard"
        data-shape="rectangular"
        data-theme="outline"
        data-text="continue_with"
        data-size="medium"
        data-logo_alignment="left"
      ></div>
    </div>
  );
}
