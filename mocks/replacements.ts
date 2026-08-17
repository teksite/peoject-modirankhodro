import {Coins, Shield, TrendingUp} from "lucide-react";
import {FeaturesType} from "@/contracts";

export const featuresList : FeaturesType[] = [
    {
        icon: TrendingUp,
        title: 'ارزش‌گذاری منصفانه',
        description: 'خودروی فعلی شما توسط کارشناسان ما با بالاترین قیمت بازار ارزش‌گذاری می‌شود',
    },
    {
        icon: Coins,
        title: 'تسویه سریع',
        description: 'مبلغ خودروی شما کسر شده و مابقی به‌صورت اقساطی یا نقدی تسویه می‌گردد',
    },
    {
        icon: Shield,
        title: 'تضمین سلامت',
        description: 'تمام مراحل معاوضه با ضمانت‌نامه رسمی و شفاف انجام می‌شود',
    },
];