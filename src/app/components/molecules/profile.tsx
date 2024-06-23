import AvailabilityStatus from "./availability_status";
import Button from "../atoms/4.ia/button";

interface ProfileProps {
  name: string;
  nidn: string;
  yearIn: string;
  room: string;
  teachingAt: string;
  changePicture: () => void;
  notes: string;
  availabilityStatus: string;
  onChange: (status: string) => void;
}

const Profile: React.FC<ProfileProps> = ({
  name,
  nidn,
  yearIn,
  room,
  teachingAt,
  changePicture,
  notes,
  availabilityStatus,
  onChange,
}) => (
  <div className="flex flex-col gap-4">
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <h2 className="text-xl font-bold">My Profile</h2>
        <Button onClick={changePicture}>Change My Picture</Button>
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col gap-2">
          <div>
            <span className="font-bold">Name</span>: {name}
          </div>
          <div>
            <span className="font-bold">NIDN</span>: {nidn}
          </div>
          <div>
            <span className="font-bold">Year in</span>: {yearIn}
          </div>
          <div>
            <span className="font-bold">Room</span>: {room}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="bg-yellow-400 rounded-md p-4">
            <span className="font-bold text-lg">Current Status</span>
            <AvailabilityStatus status={availabilityStatus} onChange={onChange} />
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col gap-2">
      <div>
        <span className="font-bold">Teaching at</span>: {teachingAt}
      </div>
      <div>
        <span className="font-bold">Notes</span>: {notes}
      </div>
    </div>
  </div>
);

export default Profile;
