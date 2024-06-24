// import Icon from "../atoms/4.ia/icon";
import Button from "../atoms/4.ia/button";

interface AvailabilityStatusProps {
  status: string;
  onChange: (status: string) => void;
}

const AvailabilityStatus: React.FC<AvailabilityStatusProps> = ({ status, onChange }) => (
  <div className="flex items-center gap-2 mt-2">
    {/* <Icon size={24} /> */}
    <span className="text-lg">{status}</span>
    <div className="flex gap-2 mt-4">
      <Button onClick={() => onChange("Available")}>Available</Button>
      <Button onClick={() => onChange("Unavailable")}>Unavailable</Button>
      <Button onClick={() => onChange("Available, but outside the lecturer's room*")}>
        Available, but outside the lecturer's room*
      </Button>
      <Button onClick={() => onChange("Urgent only, must have an appointment.*")}>
        Urgent only, must have an appointment.*
      </Button>
    </div>
  </div>
);

export default AvailabilityStatus;
