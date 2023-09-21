class PagesController < ApplicationController
  def home
  end

  def kidspeak
  end

  def wavebnb
  end

  def download
    send_file "#{Rails.root}/app/assets/images/FranciscoCambim-CV-WebDev.pdf", type: 'file/pdf', disposition: 'attachment'
  end
end
