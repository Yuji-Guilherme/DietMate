import Link from 'next/link';
import { addLinkClassNameMd, addLinkClassNameLg } from '../style';

function AddButton({ type }: { type: 'md' | 'lg' }) {
  const linkClassName: Record<typeof type, string> = {
    md: addLinkClassNameMd,
    lg: addLinkClassNameLg
  };

  return (
    <Link href="/dashboard/user" className={linkClassName[type]}>
      +
    </Link>
  );
}

export { AddButton };
