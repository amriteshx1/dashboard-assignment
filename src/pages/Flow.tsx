import { Sidebar } from '../components/Sidebar';
import FlowMap from '../components/FlowCanvas';

export default function Flow() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 px-6 py-4">
        <FlowMap />
      </div>
    </div>
  );
}
