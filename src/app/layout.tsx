// Adicionando Fonte
import { Nunito } from "next/font/google";

// Providers
import MyThemeProvider from "../providers/themeProvider";
import ReduxProvider from "../providers/reduxProvider";

// Garante a Sincronização cliente/servidor do theme
import ThemeHydrator from "@/components/ThemeHydrator";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-nunito",
});

export const metadata = {
  title: "Desafio Técnico | Lacrei Saúde",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={nunito.variable}>
      <body>
        <ReduxProvider>
          <MyThemeProvider>
            <ThemeHydrator />
            {children}
          </MyThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
