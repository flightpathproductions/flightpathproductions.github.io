import Mailchimp from 'react-mailchimp-form'

export default function MailingList() {
  return (
      <div id="mc_embed_signup" className="rounded container-fluid bg-white p-5">
        <h2 className="text-center mb-0 text-red-400">Join Our Mailing List!</h2>    
        <Mailchimp
        action='https://flightpathproductions.us5.list-manage.com/subscribe/post?u=64801c2d127741e90ec0cb3c3&amp;id=91c449f999'
        fields={[
          {
            name: 'EMAIL',
            placeholder: 'email address',
            type: 'email',
            required: true
          }
        ]}
        messages = {
          {
            sending: "Sending...",
            success: "Thank you for subscribing!",
            error: "An unexpected internal error has occurred.",
            empty: "You must write an e-mail.",
            duplicate: "Too many subscribe attempts for this email address",
            button: "Subscribe!"
          }
        }
        className='mailchimp-form fade'
        />
    </div>
  )  
}