import { hasToken } from "@/services/auth";

export default function guest({ next, router }) {
  if (hasToken()) return router.push({ name: 'Home' });
  return next();
}
