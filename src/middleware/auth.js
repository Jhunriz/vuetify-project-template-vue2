import { hasToken } from "@/services/auth";

export default function auth({ next, router }) {
  if (!hasToken()) return router.push({ name: 'Login' });
  return next();
}
