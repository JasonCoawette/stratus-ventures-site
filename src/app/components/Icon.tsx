import { 
    Earth, Filter, MonitorSmartphone, 
    Activity, Database, Users, Calendar, 
    CreditCard, ListStart, CloudDownload,
    Image, LucideProps
} from 'lucide-react';

// Define props for the Icon component, extending LucideProps
interface IconProps extends LucideProps {
  variant: string;
}

// Map icon variants to their respective components
const iconMap: Record<string, React.FC<LucideProps>> = {
  "Active Sessions": Earth,
  "Downloads": MonitorSmartphone,
  "Traffic Sources": Filter,
  "Cash Flow": Activity,
  "Daily Active Users": Calendar,
  "Data Stream": Database,
  "Total Users": Users,
  "Live Download Event": CloudDownload,
  "In-App Purchase": CreditCard,
  "New Rating or Review": ListStart,
};

// Icon component definition
const Icon: React.FC<IconProps> = ({ variant, ...props }) => {

    // Icon Not Found
    const IconComponent = iconMap[variant] ?? (() => {
        console.warn(`Icon variant not found: ${variant}`);
        return Image;
    });

  return <IconComponent {...props} />;
};

export default Icon;