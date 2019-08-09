import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Mail from '../../lib/Mail';

class SubscriptionMail {
  get key() {
    return 'SubscriptionMail';
  }

  async handle({ data }) {
    const { meetup, user } = data;
    await Mail.sendMail({
      to: `${meetup.user.name} <${meetup.user.email}>`,
      subject: 'Nova inscrição feita pelo Meetup',
      template: 'subscription',
      context: {
        manager: meetup.user.name,
        title: meetup.title,
        location: meetup.location,
        date: format(parseISO(meetup.date), " dd 'de' MMMM'", {
          locale: pt,
        }),
        user: user.name,
        email: user.email,
      },
    });
  }
}

export default new SubscriptionMail();
