require "test_helper"

class PagesControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get pages_home_url
    assert_response :success
  end

  test "should get kidspeak" do
    get pages_kidspeak_url
    assert_response :success
  end

  test "should get wavebnb" do
    get pages_wavebnb_url
    assert_response :success
  end
end
