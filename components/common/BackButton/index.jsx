import Link from "next/link";
import ArrowLeftIcon from "../../icons/ArrowLeft";

const BackButton = ({ link }) => {
  return (
    link && (
      <Link href={link}>
        <a className="btn-back">
          <ArrowLeftIcon /> Back
        </a>
      </Link>
    )
  );
};

export default BackButton;
