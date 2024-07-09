import { Request, Response } from 'express';
import fetch from 'node-fetch';
/**
 * Companies Profile Controller
 */

const getCompanyDetail = async (tickerSymbol: string) => {
  try {
    const request = await fetch(
      `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${tickerSymbol}&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`,
    );
    const response = await request.json();
    return response;
  } catch (error) {
    console.error('an error occured getting company detail', error);
  }
};

/**
 * Retrieve a user from the data store.
 *
 * @param {*} req
 * @param {*} res
 */

const getCompany = async (req: Request, res: Response) => {
  const company = await getCompanyDetail(req.params.ticker);
  res.json(company);
};

export default getCompany;
