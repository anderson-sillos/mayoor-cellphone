import { getCookie } from "cookies-next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticTranslations({ req, res }) {
  return {
    props: {
      ...(await serverSideTranslations(
        getCookie("language", { req }) ?? req.locale ?? "pt-BR",
        ["common"],
        null
      )),
      // Will be passed to the page component as props
    },
  };
}
