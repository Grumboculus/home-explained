// utils/navigation.js
import { useNavigate } from 'react-router-dom';

export function useRedirect() {
  const navigate = useNavigate();

  const redirectTo = (path) => () => {
    navigate(path);
  };

  return redirectTo;
}
