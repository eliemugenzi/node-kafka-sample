const { Kafka } = require('kafkajs')

const main = async () => {
    const kafka = new Kafka({
        clientId: 'my-app',
        brokers: ['localhost:9092']
    })


    const producer = kafka.producer()

    await producer.connect()


    await producer.send({
        topic: 'test__1',
        messages: [{
            value: 'Hello'
        }]
    })

    console.log('Sent messages')

    await producer.disconnect()
}

main()