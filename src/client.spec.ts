import 'mocha'
import { expect } from 'chai'
import Client from './client'
import { MOCK_URL } from './spec_helper'

describe('Client', () => {
  it('should fetch', async () => {
    const client = new Client(MOCK_URL)
    const result = await client.fetch('/good')
    expect(result).to.be.ok
  })

  it('should fail with status code 500', async () => {
    try {
      const client = new Client(MOCK_URL)
      await client.fetch('/bad')
      expect.fail('This should not be reached!')
    } catch (e) {
      expect(e.message).to.have.string('failed with status code 500')
    }
  })

  it('should fail with bad jsend', async () => {
    try {
      const client = new Client(MOCK_URL)
      await client.fetch('/junk')
      expect.fail('This should not be reached!')
    } catch (e) {
      expect(e.message).to.have.string('not valid jsend')
    }
  })

  it('should error', async () => {
    try {
      const client = new Client('no')
      await client.fetch('/where')
      expect.fail('This should not be reached!')
    } catch (e) {
      expect(e.message).to.have.string('ECONNREFUSED')
    }
  })
})
