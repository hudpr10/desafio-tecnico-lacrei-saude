// Providers
import MyThemeProvider from "../providers/themeProvider";
import ReduxProvider from "../providers/reduxProvider";

// Garante a Sincronização cliente/servidor do theme
import ThemeHydrator from "@/components/ThemeHydrator";

// Adicionando Fonte
import { Nunito } from "next/font/google";
import StyledComponentsRegistry from "../../lib/registry";
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-nunito",
});

// Metadados
export const metadata = {
  title: "Desafio Técnico | Lacrei Saúde",
  description:
    "Projeto de cadastro de voluntário | Desafio Técnico Lacrei Saúde",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={nunito.className}>
      <body suppressHydrationWarning={true}>
        <ReduxProvider>
          <StyledComponentsRegistry>
            <MyThemeProvider>
              <ThemeHydrator />
              {children}
            </MyThemeProvider>
          </StyledComponentsRegistry>
        </ReduxProvider>
      </body>
    </html>
  );
}
