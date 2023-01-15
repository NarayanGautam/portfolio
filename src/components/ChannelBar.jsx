import { useState } from "react";
import { BsHash } from 'react-icons/bs';
import { FaChevronDown, FaChevronRight, FaPlus } from 'react-icons/fa';
import { HiSpeakerWave } from 'react-icons/hi2';


const ChannelBar = (data) => {
    let channels = data.channels;
    return (
        <div className="channel-bar shadow-lg">
            <ChannelBlock page={data.page}/>
            <div className="channel-container">
                {Object.keys(channels).map((channel) => (
                    <Dropdown header={channel} selections={channels[channel]} />
                ))}
            </div>

        </div>
    )
}

const ChannelBlock = ({page}) => (
    <div className="channel-block">
        <h5 className="channel-block-text">{page}</h5>
    </div>
)

const Dropdown = ({ header, selections }) => {
    const [expanded, setExpanded] = useState(true);

    return (
        <div className="dropdown">
            <div onClick={() => setExpanded(!expanded)} className="dropdown-header">
                <ChevronIcon expanded={expanded} />
                <h5 className={expanded ? 'dropdown-header-text-selected' : 'dropdown-header-text'}>
                    {header}
                </h5>
                <FaPlus size="12" className="text-accent text-opacity-80 my-auto ml-auto" />
            </div>
            {expanded && selections && selections.map((selection) => <TopicSelection selection={selection} />)}
            {expanded && <Speaker />}
        </div>
    )
}

const TopicSelection = ({ selection }) => (
    <div className="dropdown-selection">
        <BsHash size="24" className="text-gray-400" />
        <h5 className="dropdown-selection-text">{selection}</h5>
    </div>
)
const Speaker = () => (
    <div class="dropdown-selection">
        <HiSpeakerWave size="18" className="text-gray-400" />
        <h5 className="dropdown-selection-text">&nbsp;chat</h5>
    </div>
)

const ChevronIcon = ({ expanded }) => {
    const chevClass = 'text-accent text-opacity-80 my-auto mr-1';
    return expanded ? (
        <FaChevronDown size='14' className={chevClass} />
    ) : (
        <FaChevronRight size='14' className={chevClass} />
    );
};

export default ChannelBar

