
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    try {
      const response = await fetch('https://picsum.photos/200');
  
      if (!response.ok) {
        throw new Error('failed to fetch image ');
      }
  
      
      const imageBuffer = await response.arrayBuffer(); //blob
  
      
      res.setHeader('Content-Type', 'image/jpeg');
      res.send(Buffer.from(imageBuffer));
  
    } catch (error) {
      res.status(500).json({ error });
    }
  };