import { useState } from 'react';
import { Mail, MessageSquare, User, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4 text-glow">Contact</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            Have questions or feedback? We'd love to hear from you. Send us a message and we'll
            respond as soon as possible.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 sm:p-12">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-crimson/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="w-8 h-8 text-crimson" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-2">Message Sent!</h3>
              <p className="text-foreground/70">
                Thank you for reaching out. We'll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
                  <User className="w-4 h-4 text-crimson" />
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className="h-12 bg-background/50 border-border/50 focus:border-crimson focus:ring-crimson/20"
                />
                {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                  <Mail className="w-4 h-4 text-crimson" />
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="h-12 bg-background/50 border-border/50 focus:border-crimson focus:ring-crimson/20"
                />
                {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-crimson" />
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us what's on your mind..."
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  rows={6}
                  className="bg-background/50 border-border/50 focus:border-crimson focus:ring-crimson/20 resize-none"
                />
                {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-crimson-dark to-crimson hover:from-crimson hover:to-crimson-light transition-all duration-300 rounded-xl shadow-glow-crimson"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
