interface Props {
    title: string;
    description: string;
    imgUrl: string;
    downloadUrl: string;
}

function Template({ title, description, imgUrl, downloadUrl }: Props): JSX.Element {
    return (
        <section className="mb-4">
            <h2>{title}</h2>
            <p className="lead">{description}</p>
            <img src={imgUrl} alt={title} className="img-fluid" />
            <p>
                <a href={downloadUrl} target="_blank" className="btn btn-success mt-3" rel="noreferrer">
                    Download
                </a>
            </p>
        </section>
    );
}

export default Template;
