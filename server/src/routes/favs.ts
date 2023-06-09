import express, { type Response } from 'express'
import User from '../models/User'
import Favs from '../models/Favs'
import { verifyToken } from '../middleware/verifyToken';
import { IFavs, RequestMasPropUser } from '../types';
import { validateFavs } from '../middleware/validator';

const favsRouter = express.Router()

favsRouter.post('/', validateFavs, verifyToken, async (req: RequestMasPropUser, res: Response): Promise<void> => {
  if (req.user !== undefined) {
    const newFav = new Favs({
      ...req.body,
      user: req.user.id
    });
    try {
      const user = await User.findById(req.user.id);
      const savedFavs: IFavs = await newFav.save();

      if (user?.favs !== undefined) {
        user.favs = user.favs.concat(savedFavs._id)
      }
      await user?.save();
      res.status(200).json({
        status_code: 200,
        data: savedFavs
      });
    } catch (err: any) {
      res.status(400).send({
        status_code: 400,
        error: err.message
      })
    };
  }
});

favsRouter.get("/", verifyToken, async (req: RequestMasPropUser, res: Response): Promise<void> => {
  if (req.user !== undefined) {
    const id = req.user.id;
    try {
      const user = await User.findById(id).populate('favs');
      res.status(200).json({
        status_code: 200,
        data: user?.favs
      })
    } catch (err: any) {
      res.status(400).send({
        status_code: 400,
        error: err.message
      })
    }
  }
})
favsRouter.delete('/:id', verifyToken, async (req: RequestMasPropUser, res: Response): Promise<void> => {
  const { params: { id } } = req;
  if (req.user !== undefined) {
    try {
      const favCardDeleted = await Favs.findById(id);
      await Favs.findByIdAndDelete(id);
      await User.findByIdAndUpdate(req.user.id, {
        $pull: {
          favs: id
        }
      }, { new: true });
      res.status(200).json({
        status_code: 200,
        data: favCardDeleted
      });
    } catch (err: any) {
      res.status(400).json({
        status_code: 400,
        error: err.message
      })
    };
  };
});

export default favsRouter