import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const loginSchema = z.object({
  username: z.string().min(1, "Username é obrigatório"),
  password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
});

export default function AuthPage() {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof loginSchema>) {
    console.log(data);
    // Login será implementado posteriormente
  }

  return (
    <div className="min-h-screen grid lg:grid-cols-2 gap-8 p-8">
      {/* Form Section */}
      <Card className="w-full max-w-md mx-auto self-center">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Acesse o painel administrativo da Marília Tech
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Digite seu username" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Digite sua senha"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full gap-2">
                Entrar
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {/* Hero Section */}
      <div className="hidden lg:flex flex-col justify-center p-8 bg-muted rounded-lg">
        <h1 className="text-4xl font-bold mb-4">
          Painel Administrativo Marília Tech
        </h1>
        <p className="text-muted-foreground text-lg">
          Gerencie seus assistentes de IA, analise dados e configure integrações em
          um só lugar.
        </p>
      </div>
    </div>
  );
}
