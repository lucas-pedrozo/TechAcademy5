import "@/css/WaveForm.css"

interface props {
    id?: string,
    min?: string,
    max?: string,
    value?: string,
    onChange?: React.ChangeEventHandler<HTMLInputElement>,
    className?: string,
}

function Waveform({ id, min, max, value, onChange, className }: props) {
    return (
        <input
            type="range"
            id={id}
            min={min}
            max={max}
            value={value}
            onChange={onChange}
            className={className}
        />
    );
}
export default Waveform;