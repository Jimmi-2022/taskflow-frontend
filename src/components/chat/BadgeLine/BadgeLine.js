import './BadgeLine.scss';

const BadgeLine = ({ text }) => {
    return (
        <div className="badge-line">
            <hr className="line"/>
            <span className="badge">{text}</span>
            <hr className="line"/>
        </div>
    );
};

export default BadgeLine;