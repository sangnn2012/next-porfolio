import React from 'react';
import { Html, Body, Head, Heading, Hr, Container, Preview, Section, Text, Tailwind} from '@react-email/tailwind'

export default function ContactFormTemplate ({message, senderEmail}) {
    return (
        <Html>
            <Head />
            <Preview>New message from your portfolio</Preview>
            <Tailwind>
                <Body>
                    <Container>
                        <Section>
                            <Heading>You received the message</Heading>
                            <Text>{message}</Text>
                            <Hr />
                            <Text>The sender's email is: {senderEmail}</Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}