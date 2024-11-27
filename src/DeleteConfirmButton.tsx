"use client";
import { Button } from "@/components/ui/button";
import { deleteFood } from "@/utils/services/api";
import { Trash2 } from "lucide-react";
import { useTransition, useState } from "react";

export function DeleteConfirmButton({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition();
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDelete = async () => {
    startTransition(async () => {
      await deleteFood(id);
    });
  };

  return (
    <div className="absolute bottom-2 right-2 flex gap-2">
      {!showConfirm ? (
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          onClick={() => setShowConfirm(true)}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      ) : (
        <>
          <Button
            variant="destructive"
            size="sm"
            className="text-xs"
            onClick={handleDelete}
            disabled={isPending}
          >
            Delete
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="text-xs"
            onClick={() => setShowConfirm(false)}
          >
            Cancel
          </Button>
        </>
      )}
    </div>
  );
}
