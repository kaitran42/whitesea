"use client";
import { Button } from "@/components/ui/button";
import { deleteFood } from "@/utils/services/api";
import { Trash2 } from "lucide-react";
import { useTransition } from "react";

export function DeleteConfirmButton({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition();

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      startTransition(async () => {
        await deleteFood(id);
      });
    }
  };

  return (
    <form
      action={handleDelete}
      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
    >
      <Button
        variant="destructive"
        size="icon"
        className="rounded-full"
        type="submit"
        disabled={isPending}
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </form>
  );
}
