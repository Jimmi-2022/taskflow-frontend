import './BadgeLine.scss';

const BadgeLine = ({ text }) => {
    return (
        <div className="badge-line">
            <div className="line"/>
            <span className="badge">{text}</span>
            <div className="line"/>
        </div>
    );
};

export default BadgeLine;