import { Input } from "../ui/input";
import { ShieldCheck } from "lucide-react";

const colorClasses = {
    primary: {
        bg: "bg-primary/10",
        border: "border-primary/30",
        text: "text-primary",
        dot: "bg-primary",
    },
    success: {
        bg: "bg-success/10",
        border: "border-success/30",
        text: "text-success",
        dot: "bg-success",
    },
};

export function AdminBlockComponent({ title, color, prefix, formData, handleChange }: any) {
    // Map legacy color names to new brand tokens
    const colorKey = color === "orange" ? "primary" : "success";
    const classes = colorClasses[colorKey];

    return (
        <div className={`${classes.bg} ${classes.border} border rounded-xl p-4 sm:p-5 space-y-3 sm:space-y-4`}>
            <div className="flex items-center gap-2">
                <div className={`h-2 w-2 rounded-full ${classes.dot}`} />
                <span className={`font-semibold text-sm sm:text-base ${classes.text} flex items-center gap-1.5`}>
                    <ShieldCheck className="h-3.5 w-3.5 opacity-70" />
                    {title}
                </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4">
                <Input
                    value={formData[`${prefix}Name`]}
                    onChange={(e) => handleChange(`${prefix}Name`, e.target.value)}
                    placeholder="Name"
                    className="h-9 sm:h-10 text-sm bg-background/60"
                />
                <Input
                    value={formData[`${prefix}Email`]}
                    onChange={(e) => handleChange(`${prefix}Email`, e.target.value)}
                    placeholder="Email"
                    className="h-9 sm:h-10 text-sm bg-background/60"
                />
                <Input
                    value={formData[`${prefix}Phone`]}
                    onChange={(e) => handleChange(`${prefix}Phone`, e.target.value)}
                    placeholder="Phone"
                    className="h-9 sm:h-10 text-sm bg-background/60"
                />
            </div>
        </div>
    );
};