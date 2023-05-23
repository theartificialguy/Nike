import { Slot } from "expo-router";
import { AuthContextProvider } from "../context/auth";

export default () => {
  // Setup the auth context and render our layout inside of it.
  return (
    <AuthContextProvider>
      <Slot />
    </AuthContextProvider>
  );
};
