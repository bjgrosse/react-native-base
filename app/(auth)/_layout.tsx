import { useEffect } from "react";
import { Slot, router } from "expo-router";
import supabase from "../../supabaseClient";
import { Linking } from "react-native";
import * as WebBrowser from "expo-web-browser";

export default function AuthLayout() {
  useEffect(() => {
    // Handle deep links
    const handleDeepLink = async (event: { url: string }) => {
      // Extract the verification token from the URL
      const url = new URL(event.url);
      const token = url.searchParams.get("token");
      const type = url.searchParams.get("type");

      if (type === "email_verification" && token) {
        try {
          const { error } = await supabase.auth.verifyOtp({
            token_hash: token,
            type: "email",
          });

          if (error) {
            console.error("Verification error:", error.message);
            alert("Email verification failed. Please try again.");
          } else {
            alert("Email verified successfully!");
            router.replace("/(tabs)");
          }
        } catch (err) {
          console.error("Error during verification:", err);
          alert("An error occurred during verification.");
        }
      }
    };

    // Set up deep link listeners
    const subscription = Linking.addEventListener("url", handleDeepLink);

    // Handle initial URL
    Linking.getInitialURL().then((url) => {
      if (url) {
        handleDeepLink({ url });
      }
    });

    // Handle auth state changes
    const {
      data: { subscription: authSubscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        // If user is authenticated, redirect to main app
        router.replace("/(tabs)");
      }
    });

    return () => {
      subscription.remove();
      authSubscription?.unsubscribe();
    };
  }, []);

  return <Slot />;
}
