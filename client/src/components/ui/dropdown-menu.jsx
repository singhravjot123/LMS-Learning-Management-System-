// import * as React from "react"
// import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
// import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react"

// import { cn } from "@/lib/utils"

// function DropdownMenu({
//   ...props
// }) {
//   return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />;
// }

// function DropdownMenuPortal({
//   ...props
// }) {
//   return (<DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />);
// }

// function DropdownMenuTrigger({
//   ...props
// }) {
//   return (<DropdownMenuPrimitive.Trigger data-slot="dropdown-menu-trigger" {...props} />);
// }

// function DropdownMenuContent({
//   className,
//   sideOffset = 4,
//   ...props
// }) {
//   return (
//     <DropdownMenuPrimitive.Portal>
//       <DropdownMenuPrimitive.Content
//         data-slot="dropdown-menu-content"
//         sideOffset={sideOffset}
//         className={cn(
//           "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md",
//           className
//         )}
//         {...props} />
//     </DropdownMenuPrimitive.Portal>
//   );
// }

// function DropdownMenuGroup({
//   ...props
// }) {
//   return (<DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />);
// }

// function DropdownMenuItem({
//   className,
//   inset,
//   variant = "default",
//   ...props
// }) {
//   return (
//     <DropdownMenuPrimitive.Item
//       data-slot="dropdown-menu-item"
//       data-inset={inset}
//       data-variant={variant}
//       className={cn(
//         "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive-foreground data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/40 data-[variant=destructive]:focus:text-destructive-foreground data-[variant=destructive]:*:[svg]:!text-destructive-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
//         className
//       )}
//       {...props} />
//   );
// }

// function DropdownMenuCheckboxItem({
//   className,
//   children,
//   checked,
//   ...props
// }) {
//   return (
//     <DropdownMenuPrimitive.CheckboxItem
//       data-slot="dropdown-menu-checkbox-item"
//       className={cn(
//         "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
//         className
//       )}
//       checked={checked}
//       {...props}>
//       <span
//         className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
//         <DropdownMenuPrimitive.ItemIndicator>
//           <CheckIcon className="size-4" />
//         </DropdownMenuPrimitive.ItemIndicator>
//       </span>
//       {children}
//     </DropdownMenuPrimitive.CheckboxItem>
//   );
// }

// function DropdownMenuRadioGroup({
//   ...props
// }) {
//   return (<DropdownMenuPrimitive.RadioGroup data-slot="dropdown-menu-radio-group" {...props} />);
// }

// function DropdownMenuRadioItem({
//   className,
//   children,
//   ...props
// }) {
//   return (
//     <DropdownMenuPrimitive.RadioItem
//       data-slot="dropdown-menu-radio-item"
//       className={cn(
//         "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
//         className
//       )}
//       {...props}>
//       <span
//         className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
//         <DropdownMenuPrimitive.ItemIndicator>
//           <CircleIcon className="size-2 fill-current" />
//         </DropdownMenuPrimitive.ItemIndicator>
//       </span>
//       {children}
//     </DropdownMenuPrimitive.RadioItem>
//   );
// }

// function DropdownMenuLabel({
//   className,
//   inset,
//   ...props
// }) {
//   return (
//     <DropdownMenuPrimitive.Label
//       data-slot="dropdown-menu-label"
//       data-inset={inset}
//       className={cn("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", className)}
//       {...props} />
//   );
// }

// function DropdownMenuSeparator({
//   className,
//   ...props
// }) {
//   return (
//     <DropdownMenuPrimitive.Separator
//       data-slot="dropdown-menu-separator"
//       className={cn("bg-border -mx-1 my-1 h-px", className)}
//       {...props} />
//   );
// }

// function DropdownMenuShortcut({
//   className,
//   ...props
// }) {
//   return (
//     <span
//       data-slot="dropdown-menu-shortcut"
//       className={cn("text-muted-foreground ml-auto text-xs tracking-widest", className)}
//       {...props} />
//   );
// }

// function DropdownMenuSub({
//   ...props
// }) {
//   return <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />;
// }

// function DropdownMenuSubTrigger({
//   className,
//   inset,
//   children,
//   ...props
// }) {
//   return (
//     <DropdownMenuPrimitive.SubTrigger
//       data-slot="dropdown-menu-sub-trigger"
//       data-inset={inset}
//       className={cn(
//         "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8",
//         className
//       )}
//       {...props}>
//       {children}
//       <ChevronRightIcon className="ml-auto size-4" />
//     </DropdownMenuPrimitive.SubTrigger>
//   );
// }

// function DropdownMenuSubContent({
//   className,
//   ...props
// }) {
//   return (
//     <DropdownMenuPrimitive.SubContent
//       data-slot="dropdown-menu-sub-content"
//       className={cn(
//         "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-lg",
//         className
//       )}
//       {...props} />
//   );
// }

// export {
//   DropdownMenu,
//   DropdownMenuPortal,
//   DropdownMenuTrigger,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuLabel,
//   DropdownMenuItem,
//   DropdownMenuCheckboxItem,
//   DropdownMenuRadioGroup,
//   DropdownMenuRadioItem,
//   DropdownMenuSeparator,
//   DropdownMenuShortcut,
//   DropdownMenuSub,
//   DropdownMenuSubTrigger,
//   DropdownMenuSubContent,
// }
// import * as React from "react"
// import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
// import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react"

// import { cn } from "@/lib/utils"

// const DropdownMenu = DropdownMenuPrimitive.Root

// const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

// const DropdownMenuGroup = DropdownMenuPrimitive.Group

// const DropdownMenuPortal = DropdownMenuPrimitive.Portal

// const DropdownMenuSub = DropdownMenuPrimitive.Sub

// const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

// const DropdownMenuSubTrigger = React.forwardRef(({ className, inset, children, ...props }, ref) => (
//   <DropdownMenuPrimitive.SubTrigger
//     ref={ref}
//     className={cn(
//       "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8",
//       inset && "pl-8",
//       className
//     )}
//     {...props}
//   >
//     {children}
//     <ChevronRightIcon className="ml-auto size-4" />
//   </DropdownMenuPrimitive.SubTrigger>
// ))
// DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName

// const DropdownMenuSubContent = React.forwardRef(({ className, ...props }, ref) => (
//   <DropdownMenuPrimitive.SubContent
//     ref={ref}
//     className={cn(
//       "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-lg",
//       className
//     )}
//     {...props}
//   />
// ))
// DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName

// const DropdownMenuContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => (
//   <DropdownMenuPrimitive.Portal>
//     <DropdownMenuPrimitive.Content
//       ref={ref}
//       sideOffset={sideOffset}
//       className={cn(
//         "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md",
//         className
//       )}
//       {...props}
//     />
//   </DropdownMenuPrimitive.Portal>
// ))
// DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

// const DropdownMenuItem = React.forwardRef(({ className, inset, ...props }, ref) => (
//   <DropdownMenuPrimitive.Item
//     ref={ref}
//     className={cn(
//       "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8",
//       inset && "pl-8",
//       className
//     )}
//     {...props}
//   />
// ))
// DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

// const DropdownMenuCheckboxItem = React.forwardRef(({ className, children, checked, ...props }, ref) => (
//   <DropdownMenuPrimitive.CheckboxItem
//     ref={ref}
//     className={cn(
//       "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
//       className
//     )}
//     checked={checked}
//     {...props}
//   >
//     <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
//       <DropdownMenuPrimitive.ItemIndicator>
//         <CheckIcon className="size-4" />
//       </DropdownMenuPrimitive.ItemIndicator>
//     </span>
//     {children}
//   </DropdownMenuPrimitive.CheckboxItem>
// ))
// DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName

// const DropdownMenuRadioItem = React.forwardRef(({ className, children, ...props }, ref) => (
//   <DropdownMenuPrimitive.RadioItem
//     ref={ref}
//     className={cn(
//       "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
//       className
//     )}
//     {...props}
//   >
//     <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
//       <DropdownMenuPrimitive.ItemIndicator>
//         <CircleIcon className="size-2 fill-current" />
//       </DropdownMenuPrimitive.ItemIndicator>
//     </span>
//     {children}
//   </DropdownMenuPrimitive.RadioItem>
// ))
// DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

// const DropdownMenuLabel = React.forwardRef(({ className, inset, ...props }, ref) => (
//   <DropdownMenuPrimitive.Label
//     ref={ref}
//     className={cn("px-2 py-1.5 text-sm font-medium", inset && "pl-8", className)}
//     {...props}
//   />
// ))
// DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

// const DropdownMenuSeparator = React.forwardRef(({ className, ...props }, ref) => (
//   <DropdownMenuPrimitive.Separator
//     ref={ref}
//     className={cn("bg-border -mx-1 my-1 h-px", className)}
//     {...props}
//   />
// ))
// DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

// const DropdownMenuShortcut = ({ className, ...props }) => {
//   return (
//     <span
//       className={cn("text-muted-foreground ml-auto text-xs tracking-widest", className)}
//       {...props}
//     />
//   )
// }
// DropdownMenuShortcut.displayName = "DropdownMenuShortcut"

// export {
//   DropdownMenu,
//   DropdownMenuTrigger,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuCheckboxItem,
//   DropdownMenuRadioItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuShortcut,
//   DropdownMenuGroup,
//   DropdownMenuPortal,
//   DropdownMenuSub,
//   DropdownMenuSubContent,
//   DropdownMenuSubTrigger,
//   DropdownMenuRadioGroup,
// }
"use client"

import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { Check, ChevronRight, Circle } from "lucide-react"
import { cn } from "@/lib/utils"

const DropdownMenu = DropdownMenuPrimitive.Root
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger
const DropdownMenuGroup = DropdownMenuPrimitive.Group
const DropdownMenuPortal = DropdownMenuPrimitive.Portal
const DropdownMenuSub = DropdownMenuPrimitive.Sub
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const DropdownMenuSubTrigger = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <DropdownMenuPrimitive.SubTrigger
      ref={ref}
      className={cn(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRight className="ml-auto h-4 w-4" />
    </DropdownMenuPrimitive.SubTrigger>
  )
)
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName

const DropdownMenuSubContent = React.forwardRef(
  ({ className, ...props }, ref) => (
    <DropdownMenuPrimitive.SubContent
      ref={ref}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in slide-in-from-left-1",
        className
      )}
      {...props}
    />
  )
)
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName

const DropdownMenuContent = React.forwardRef(
  ({ className, sideOffset = 4, ...props }, ref) => (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        className={cn(
          "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80",
          className
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  )
)
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownMenuItem = React.forwardRef(
  ({ className, inset, ...props }, ref) => (
    <DropdownMenuPrimitive.Item
      ref={ref}
      className={cn(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground",
        inset && "pl-8",
        className
      )}
      {...props}
    />
  )
)
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuCheckboxItem = React.forwardRef(
  ({ className, children, checked, ...props }, ref) => (
    <DropdownMenuPrimitive.CheckboxItem
      ref={ref}
      className={cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <Check className="h-4 w-4" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  )
)
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName

const DropdownMenuRadioItem = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <DropdownMenuPrimitive.RadioItem
      ref={ref}
      className={cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground",
        className
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <Circle className="h-2 w-2 fill-current" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  )
)
DropdownMenuRadioItem.displayName =
  DropdownMenuPrimitive.RadioItem.displayName

const DropdownMenuLabel = React.forwardRef(
  ({ className, inset, ...props }, ref) => (
    <DropdownMenuPrimitive.Label
      ref={ref}
      className={cn(
        "px-2 py-1.5 text-sm font-semibold",
        inset && "pl-8",
        className
      )}
      {...props}
    />
  )
)
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const DropdownMenuSeparator = React.forwardRef(
  ({ className, ...props }, ref) => (
    <DropdownMenuPrimitive.Separator
      ref={ref}
      className={cn("-mx-1 my-1 h-px bg-muted", className)}
      {...props}
    />
  )
)
DropdownMenuSeparator.displayName =
  DropdownMenuPrimitive.Separator.displayName

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
}
