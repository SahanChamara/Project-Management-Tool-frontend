import { parseAsBoolean, useQueryState } from "nuqs";
import { useState } from "react";

const useConfirmDialog = () => {
    const [open, setopen] = useQueryState(
        "confirm-dialog",
        parseAsBoolean.withDefault(false)
    );

    const [context, setContext] = useState<any>(null);

    const onOpenDialog = (data?: any) => {
        setContext(data || null);
        setopen(true);
    };

    const onCloseDialog = () => {
        setContext(null);
        setopen(false);
    };

    return {
        open,
        context,
        onOpenDialog,
        onCloseDialog,
    };
}

export default useConfirmDialog;