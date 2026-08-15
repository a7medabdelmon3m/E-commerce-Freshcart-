"use client";
import { addAddresseItem } from "@/api/actions/routea.ctions";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { toast } from "react-toastify";

interface ModalProps {
  isOpen?: boolean;
  buttonTitle?: string;
  onOpenChange?: (open: boolean) => void;
  isEdit?: boolean;
  addresseData?: {
    name: string;
    details: string;
    phone: string;
    city: string;
  };
}

export function AddAndEditModal({
  isOpen,
  onOpenChange,
  buttonTitle = "Add Address",
  isEdit = false,
  addresseData
}: ModalProps) {
  function closeModal() {
    onOpenChange?.(false);
  }
  const [isLoading, setisLoading] = useState(false)
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    setisLoading(true)
    if(isEdit){
      closeModal();
      return
    }
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get("name") as string,
      details: formData.get("details") as string,
      phone: formData.get("phone") as string,
      city: formData.get("city") as string,
    };
    
    const resp = await addAddresseItem(data);
    setisLoading(false)
    console.log("resp : ", resp);

    if (resp.success) {
      toast.success(resp?.data?.message || "Address added successfully!");
      closeModal();
    } else {
      toast.error(resp.error || "An error occurred");
    }
  }
  // 

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      {!onOpenChange && (
        <DialogTrigger asChild>
          <Button className="h-auto! rounded-xl py-2.5 px-5 bg-main-color inline-flex gap-2 items-center shadow-[0px_4px_6px_-4px_#16A34A40,0px_10px_15px_-3px_#16A34A40] text-white font-semibold hover:bg-main-color-hover transition-colors duration-100">
            <FaPlus />
            {buttonTitle}
          </Button>
        </DialogTrigger>
      )}

      <DialogContent className=" h-auto! bg-white rounded-3xl shadow-2xl w-full! max-w-lg! p-6 sm:p-8 animate-in zoom-in-95 duration-200 [&>button]:w-9 [&>button]:h-9 [&>button]:rounded-lg [&>button]:bg-gray-100 [&>button]:text-gray-600 [&>button]:hover:bg-gray-200 [&>button]:flex [&>button]:items-center [&>button]:justify-center [&>button]:cursor-pointer [&>button]:transition-colors">
        <DialogHeader className="flex items-start justify-between mb-6">
          <DialogTitle className="text-xl font-bold text-gray-900">
            {isEdit ? "Edit Address" : "Add New Address"}
          </DialogTitle>
        </DialogHeader>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <Label
              htmlFor="address-name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Address Name
            </Label>
            <Input
              placeholder="e.g. Home, Office"
              id="address-name"
              name="name"
              required
              type="text"
              defaultValue={isEdit ? addresseData?.name : ''}
              className="h-auto! w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
            />
          </div>

          <div>
            <Label
              htmlFor="address-details"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Address Details
            </Label>
            <Textarea
              placeholder="Enter full address details..."
              id="address-details"
              name="details"
              required
              defaultValue={isEdit ? addresseData?.details : ''}
              className="min-h-24 w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all resize-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Phone Number
              </Label>
              <Input
                placeholder="01xxxxxxxxx"
                id="phone"
                name="phone"
                required
                type="tel"
                defaultValue={isEdit ? addresseData?.phone : ''}
                className="h-auto! w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
              />
            </div>

            <div>
              <Label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                City
              </Label>
              <Input
                placeholder="Cairo"
                id="city"
                name="city"
                required
                type="text"
                defaultValue={isEdit ? addresseData?.city : ''}
                className="h-auto! w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
              />
            </div>
          </div>

          <DialogFooter className="flex items-center gap-3 pt-4">
            {/* إضافة asChild هنا لعدم تكرار الـ button */}
            <DialogClose asChild>
              <Button
                type="button"
                className="h-auto! flex-1 py-3 px-6 rounded-xl bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition-colors"
                variant="default"
              >
                Cancel
              </Button>
            </DialogClose>

            <Button
              className="h-auto! flex-1 py-3 px-6 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 shadow-lg shadow-green-600/25"
              type="submit"
            >
              {isEdit ? "Update" : isLoading ? 'Saving...' : "Add Address"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
