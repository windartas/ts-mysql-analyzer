import { MySQLAnalyzer } from '../src'
import { getSchema } from './get-schema'

async function main() {
  const analyzer = new MySQLAnalyzer({
    schema: await getSchema()
  })

  const diagnostics = analyzer.analyze('SELECT * FROM users WHERE email = "some-email-address"')
  console.log(diagnostics)
}

main()
  .then(() => {
    process.exit(0)
  })
  .catch(err => {
    console.error(err)
  })
