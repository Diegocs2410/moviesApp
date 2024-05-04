import {Cast} from '../../../core/entities/cast.entity';
import {MovieDBCast} from './../movie-db.response';

export class CastMapper {
  static fromMovieDBToCast(actor: MovieDBCast): Cast {
    return {
      avatar: actor.profile_path
        ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
        : 'https://i.stack.imgur.com/l60Hf.png',
      id: actor.id,
      name: actor.name,
      character: actor.character ?? 'No character',
    };
  }
}
