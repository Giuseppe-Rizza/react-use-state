import { useState } from 'react';
import languages from '../assets/languages';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function Main() {

    const [highlightLanguage, setHighlightLanguage] = useState(null)

    return (
        <>
            <main>
                <h1>Learn Web Development</h1>

                <div className="ms-3 mt-3">

                    {languages.map(language =>
                        <Button onClick={() => setHighlightLanguage(language.id)} key={language.id} variant={language.id === highlightLanguage ? "Warning" : "Primary"} className="me-3">{language.title}
                        </Button>)}

                    <Card className="mt-3 me-3">
                        <Card.Body>
                            <Card.Title>
                                {languages.find(language => language.id === highlightLanguage)?.title}
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </div>


            </main>
        </>
    )
}