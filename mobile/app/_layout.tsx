// import { Stack } from "expo-router";
// import "../global.css";
// import { ClerkProvider } from "@clerk/clerk-expo";
// import { tokenCache } from "@clerk/clerk-expo/token-cache";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { StatusBar } from "expo-status-bar";

// export default function RootLayout() {
//   const queryClient = new QueryClient();

  // return (
    // <Stack>
    //   <Stack.Screen name='index' options={{ title: "Home"}} />
    // </Stack>
//     <ClerkProvider tokenCache={tokenCache}>
//       <QueryClientProvider client={queryClient}>
//         <Stack screenOptions={{ headerShown: false }}>
//           <Stack.Screen name="(auth)" />
//           <Stack.Screen name="(tabs)" />
//         </Stack>
//         <StatusBar style="dark" />
//       </QueryClientProvider>
//     </ClerkProvider>
//   );
// }

import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import { Stack } from "expo-router";
import "../global.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache}>
      <QueryClientProvider client={queryClient}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(auth)" />
          <Stack.Screen name="(tabs)" />
        </Stack>
        <StatusBar style="dark" />
      </QueryClientProvider>
    </ClerkProvider>
  );
}