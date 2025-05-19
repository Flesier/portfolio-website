import { Toaster as SonnerToaster } from "sonner";
import { Toast } from "./toast";
import { useToast } from "@/hooks/use-toast";

interface ToastData {
  id: string;
  title?: string;
  description?: string;
  action?: React.ReactNode;
}

export function Toaster() {
  const { toasts } = useToast();

  return (
    <>
      <SonnerToaster />
      {toasts?.map(({ id, title, description, action, ...props }: ToastData) => (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <div className="font-semibold">{title}</div>}
              {description && <div className="text-sm opacity-90">{description}</div>}
            </div>
            {action && <div className="flex items-center">{action}</div>}
          </Toast>
      ))}
    </>
  );
}