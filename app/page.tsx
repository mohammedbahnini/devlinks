'use client';
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { AtSign, AtSignIcon, Link } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from 'zod';
import { avocado } from '@lucide/lab';
import { LuGithub, LuLink } from "react-icons/lu";
import { TbBrandGithubFilled } from "react-icons/tb";
import { AiFillYoutube } from "react-icons/ai";
import { FaGithubAlt, FaLinkedin, FaLinkedinIn } from "react-icons/fa";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChangeEvent, MouseEventHandler, useRef, useState } from "react";
import { PiImage } from "react-icons/pi";
import ImageUploader from "@/components/shared/image-uploader";
import SystemDesignPage from "@/app/system-design/page";
import LoginPage from "@/app/login/page";


export default function Home() {


  return (
   // <SystemDesignPage />
      <LoginPage />

  );
}
