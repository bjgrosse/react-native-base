import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { Link, router } from "expo-router";
import supabase from "../../supabaseClient";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isVerificationSent, setIsVerificationSent] = useState(false);

  useEffect(() => {
    // Check if email is verified
    const checkEmailVerification = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user?.email_confirmed_at) {
        Alert.alert(
          "Email Verified",
          "Your email has been verified successfully!",
          [
            {
              text: "Continue",
              onPress: () => router.replace("/(tabs)"),
            },
          ]
        );
      }
    };

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event) => {
      if (event === "USER_UPDATED") {
        checkEmailVerification();
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleSignUp = async () => {
    try {
      setLoading(true);
      setError(null);

      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `testapp://auth/callback`,
        },
      });

      if (error) throw error;

      setIsVerificationSent(true);
      Alert.alert(
        "Verification Email Sent",
        "Please check your email for the verification link. Click the link to verify your account.",
        [{ text: "OK" }]
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      {error && <Text style={styles.error}>{error}</Text>}

      {isVerificationSent ? (
        <View style={styles.verificationContainer}>
          <Text style={styles.verificationText}>
            Please check your email to verify your account. Once verified, you
            can proceed to login.
          </Text>
          <Link href="/login" style={styles.link}>
            Go to Login
          </Link>
        </View>
      ) : (
        <>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity
            style={styles.button}
            onPress={handleSignUp}
            disabled={loading}
          >
            <Text style={styles.buttonText}>
              {loading ? "Creating account..." : "Sign Up"}
            </Text>
          </TouchableOpacity>

          <View style={styles.linkContainer}>
            <Text>Already have an account? </Text>
            <Link href="/login" style={styles.link}>
              Login here
            </Link>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 15,
    marginBottom: 15,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#0284c7",
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  error: {
    color: "#ef4444",
    marginBottom: 10,
    textAlign: "center",
  },
  linkContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  link: {
    color: "#0284c7",
  },
  verificationContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  verificationText: {
    marginBottom: 20,
    textAlign: "center",
  },
});
