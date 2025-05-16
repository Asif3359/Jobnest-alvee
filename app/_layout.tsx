import { useColorScheme } from '@/hooks/useColorScheme';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import '../global.css';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="auth/job-seeker-login" options={{ headerShown: false }} />
        <Stack.Screen name="auth/recruiter-login" options={{ headerShown: false }} />
        <Stack.Screen name="auth/job-seeker-signup" options={{ headerShown: false }} />
        <Stack.Screen name="auth/recruiter-signup" options={{ headerShown: false }} />
        <Stack.Screen name="seeker/index" options={{ headerTitle: 'Job Seeker', headerShown: true }} />
        <Stack.Screen name="recruiter/index" options={{ headerTitle: 'Recruiter', headerShown: true }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
