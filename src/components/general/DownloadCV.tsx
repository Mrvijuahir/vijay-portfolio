import PrimaryButton from "./PrimaryButton";
import { Download } from "lucide-react";

export default function DownloadCVButton() {
  return (
    <PrimaryButton
      variant="contained"
      color="primary"
      endIcon={<Download size={"20"} />}
      onClick={() => window?.open("/files/vijay_resume.pdf", "_blank")}
    >
      Download CV
    </PrimaryButton>
  );
}
