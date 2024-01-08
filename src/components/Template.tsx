interface Props {
    title: string;
    description: string;
    imgUrl: string;
    downloadUrl: string;
    demoUrl?: string;
}

function Template({ title, description, imgUrl, downloadUrl, demoUrl }: Props): JSX.Element {
    return (
        <section className="mb-4">
            <h2>{title}</h2>
            <p className="lead">{description}</p>
            <img src={imgUrl} alt={title} className="img-fluid" />
            <p>
                <a href={downloadUrl} target="_blank" className="btn btn-success mt-3 me-2" rel="noreferrer">
                    Download
                </a>
                {demoUrl && (
                    <a href={demoUrl} target="_blank" className="btn btn-primary mt-3" rel="noreferrer">
                        Demo
                    </a>
                )}
            </p>
        </section>
    );
}

export default Template;
