const { Kafka } = require('kafkajs')

const main = async () => {
    const kafka = new Kafka({
        clientId: 'my-app',
        brokers: ['localhost:9092']
    })

    const consumer = kafka.consumer({groupId: 'test__group'})

    await consumer.connect()

    await consumer.subscribe({topic:  'test__1'}, { fromBeginning: true })
    


await consumer.run({
  eachMessage: async ({ topic, partition, message }) => {
    console.log({
      value: message.value.toString(),
    })
  },
})


}

main()